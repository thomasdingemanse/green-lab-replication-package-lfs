# noinspection PyUnusedLocal,PyUnusedLocal

from time import sleep

def main(device, *args, **kwargs):
    """ Enable for Web Experiments using Chrome"""
    # Tap coordinates can be found by enabling 'Pointer location' in Developer options
    # Accept Chrome policy prompts
    #device.shell('input tap 600 1420')
    #device.shell('input tap 200 1420')
    #device.shell('input tap 105 1300')
    # return

    # The browsers need some time to boot

    # Chrome
    if device.current_activity() == "com.android.chrome":
        sleep(1)
        device.shell('input tap 540 1660')
        sleep(1)
        device.shell('input tap 180 1690')

    # Opera
    if device.current_activity() == "com.opera.browser":
        sleep(5)
        device.shell('input tap 980 150')
        sleep(1)
        device.shell('input tap 980 150')
        sleep(1)
        device.shell('input tap 980 150')
        sleep(2)
        device.shell('input tap 800 1730')

    # Enable permissions for Chrome
    #device.shell('pm grant com.android.chrome android.permission.RECORD_AUDIO')
    #device.shell('pm grant com.android.chrome android.permission.CAMERA')
    #device.shell('pm grant com.android.chrome android.permission.WRITE_EXTERNAL_STORAGE')
    #device.shell('pm grant com.android.chrome android.permission.READ_EXTERNAL_STORAGE')

    print(f"Running on browser: {device.current_activity()}")


