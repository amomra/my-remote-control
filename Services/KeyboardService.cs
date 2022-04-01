using System;
using System.Runtime.InteropServices;

namespace MyRemoteControl.Services
{
    public class KeyboardService
    {
        [DllImport("user32.dll")]
        private static extern void keybd_event(byte virtualKey, byte scanCode, uint flags, IntPtr extraInfo);

        public void SendKey(VirtualKey key, KeyEvent keyEvent = KeyEvent.KEYEVENTF_KEYDOWN)
        {
            // chama a API do Windows
            keybd_event((byte) key, 0, (uint) keyEvent, IntPtr.Zero);
        }
    }
}