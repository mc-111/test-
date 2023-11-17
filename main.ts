MakerCloud.registerTopicMessageHandler("Q13SDKQQ1", function (receivedMessage) {
    threshold = receivedMessage
    basic.showString("" + (threshold))
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Fabulous)
    basic.pause(100)
    basic.showIcon(IconNames.TShirt)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (threshold))
    basic.pause(100)
    basic.showString("" + (floor))
    basic.pause(100)
    basic.showString("" + (light2))
})
MakerCloud.registerTopicMessageHandler("13UWFKVH7", function (receivedMessage) {
    light2 = receivedMessage
    basic.showString("" + (light2))
})
MakerCloud.registerTopicMessageHandler("VN1K3GSF6", function (receivedMessage) {
    floor = receivedMessage
    basic.showString("" + (floor))
})
let light2 = ""
let floor = ""
let threshold = ""
MakerCloud.configRxTxPwbrick(MakerCloud.SerialPorts.PORT1)
MakerCloud.setupWifi("hohofamily", "mingchun123")
MakerCloud.connectMakerCloudMQTT()
MakerCloud.subscribeTopic("Q13SDKQQ1")
MakerCloud.subscribeTopic("VN1K3GSF6")
MakerCloud.subscribeTopic("13UWFKVH7")
