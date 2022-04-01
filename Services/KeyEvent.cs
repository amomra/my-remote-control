using System;

namespace MyRemoteControl.Services
{
    [Flags]
    public enum KeyEvent : uint
    {
        KEYEVENTF_KEYDOWN = 0x0000,
        KEYEVENTF_EXTENTEDKEY = 0x0001,
        KEYEVENTF_KEYUP = 0x0002
    }
}