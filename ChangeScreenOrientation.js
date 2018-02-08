Java.perform(function () {
    var Activity = Java.use("android.app.Activity");
 
    Activity.onResume.implementation = function () {
        
        this.setRequestedOrientation(parseInt("0"));
        console.log("done");
        this.onResume();
    };
});

//rotate screen
/*
SCREEN_ORIENTATION_BEHIND

added in API level 1
int SCREEN_ORIENTATION_BEHIND
Constant corresponding to behind in the screenOrientation attribute.

Constant Value: 3 (0x00000003)

SCREEN_ORIENTATION_FULL_SENSOR

added in API level 9
int SCREEN_ORIENTATION_FULL_SENSOR
Constant corresponding to fullSensor in the screenOrientation attribute.

Constant Value: 10 (0x0000000a)

SCREEN_ORIENTATION_FULL_USER

added in API level 18
int SCREEN_ORIENTATION_FULL_USER
Constant corresponding to fullUser in the screenOrientation attribute.

Constant Value: 13 (0x0000000d)

SCREEN_ORIENTATION_LANDSCAPE

added in API level 1
int SCREEN_ORIENTATION_LANDSCAPE
Constant corresponding to landscape in the screenOrientation attribute.

Constant Value: 0 (0x00000000)

SCREEN_ORIENTATION_LOCKED

added in API level 18
int SCREEN_ORIENTATION_LOCKED
Constant corresponding to locked in the screenOrientation attribute.

Constant Value: 14 (0x0000000e)

SCREEN_ORIENTATION_NOSENSOR

added in API level 1
int SCREEN_ORIENTATION_NOSENSOR
Constant corresponding to nosensor in the screenOrientation attribute.

Constant Value: 5 (0x00000005)

SCREEN_ORIENTATION_PORTRAIT

added in API level 1
int SCREEN_ORIENTATION_PORTRAIT
Constant corresponding to portrait in the screenOrientation attribute.

Constant Value: 1 (0x00000001)

SCREEN_ORIENTATION_REVERSE_LANDSCAPE

added in API level 9
int SCREEN_ORIENTATION_REVERSE_LANDSCAPE
Constant corresponding to reverseLandscape in the screenOrientation attribute.

Constant Value: 8 (0x00000008)

SCREEN_ORIENTATION_REVERSE_PORTRAIT

added in API level 9
int SCREEN_ORIENTATION_REVERSE_PORTRAIT
Constant corresponding to reversePortrait in the screenOrientation attribute.

Constant Value: 9 (0x00000009)

SCREEN_ORIENTATION_SENSOR

added in API level 1
int SCREEN_ORIENTATION_SENSOR
Constant corresponding to sensor in the screenOrientation attribute.

Constant Value: 4 (0x00000004)

SCREEN_ORIENTATION_SENSOR_LANDSCAPE

added in API level 9
int SCREEN_ORIENTATION_SENSOR_LANDSCAPE
Constant corresponding to sensorLandscape in the screenOrientation attribute.

Constant Value: 6 (0x00000006)

SCREEN_ORIENTATION_SENSOR_PORTRAIT

added in API level 9
int SCREEN_ORIENTATION_SENSOR_PORTRAIT
Constant corresponding to sensorPortrait in the screenOrientation attribute.

Constant Value: 7 (0x00000007)

SCREEN_ORIENTATION_UNSPECIFIED

added in API level 1
int SCREEN_ORIENTATION_UNSPECIFIED
Constant corresponding to unspecified in the screenOrientation attribute.

Constant Value: -1 (0xffffffff)

SCREEN_ORIENTATION_USER

added in API level 1
int SCREEN_ORIENTATION_USER
Constant corresponding to user in the screenOrientation attribute.

Constant Value: 2 (0x00000002)

SCREEN_ORIENTATION_USER_LANDSCAPE

added in API level 18
int SCREEN_ORIENTATION_USER_LANDSCAPE
Constant corresponding to userLandscape in the screenOrientation attribute.

Constant Value: 11 (0x0000000b)

SCREEN_ORIENTATION_USER_PORTRAIT

added in API level 18
int SCREEN_ORIENTATION_USER_PORTRAIT
Constant corresponding to userPortrait in the screenOrientation attribute.

Constant Value: 12 (0x0000000c)


*/