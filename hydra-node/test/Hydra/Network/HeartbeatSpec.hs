module Hydra.Network.HeartbeatSpec where

import Hydra.Prelude

import Control.Monad.Class.MonadSTM (modifyTVar', newTVarIO)
import Control.Monad.IOSim (runSimOrThrow)
import Hydra.HeadLogic (HydraMessage (..))
import Hydra.Network (Host (..), Network (..))
import Hydra.Network.Heartbeat (Heartbeat (..), withHeartbeat)
import Test.Hspec (Spec, describe, it, shouldBe)

spec :: Spec
spec = describe "Heartbeat" $ do
  let dummyNetwork msgqueue _cb action =
        action $ Network{broadcast = \msg -> atomically $ modifyTVar' msgqueue (msg :)}

  it "sends a heartbeat message with own party id every 500 ms" $ do
    let sentHeartbeats = runSimOrThrow $ do
          sentMessages <- newTVarIO ([] :: [Heartbeat (HydraMessage Integer)])

          withHeartbeat 1 (dummyNetwork sentMessages) noop $ \_ ->
            threadDelay 1.1

          readTVarIO sentMessages

    sentHeartbeats `shouldBe` replicate 2 (Ping 1)

  it "propagates Heartbeat received from other parties" $ do
    let receivedHeartbeats = runSimOrThrow $ do
          receivedMessages <- newTVarIO ([] :: [HydraMessage Integer])

          let receive msg = atomically $ modifyTVar' receivedMessages (msg :)
          withHeartbeat 1 (\cb action -> action (Network noop) >> cb (Ping 2)) receive $ \_ ->
            threadDelay 1

          readTVarIO receivedMessages

    receivedHeartbeats `shouldBe` [Connected 2]

  it "stop sending heartbeat message given action sends a message" $ do
    let someMessage = ReqTx 1 1
        sentHeartbeats = runSimOrThrow $ do
          sentMessages <- newTVarIO ([] :: [Heartbeat (HydraMessage Integer)])

          withHeartbeat 1 (dummyNetwork sentMessages) noop $ \Network{broadcast} -> do
            threadDelay 0.6
            broadcast someMessage
            threadDelay 1

          readTVarIO sentMessages

    sentHeartbeats `shouldBe` [Message someMessage, Ping 1]

testHost :: Host
testHost = Host{hostName = "0.0.0.0", portNumber = 4000}

noop :: Monad m => b -> m ()
noop = const $ pure ()
