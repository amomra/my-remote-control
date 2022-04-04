namespace MyRemoteControl.Services
{
    public enum VirtualKey : byte
    {
        VK_SPACE = 0x20,

        VK_LEFT = 0x25,
        VK_UP = 0x26,
        VK_RIGHT = 0x27,
        VK_DOWN = 0x28,

        VK_F = 0x46,

        VK_J = 0x4A,
        VK_L = 0x4C,

        VK_VOLUME_MUTE = 0xAD,
        VK_VOLUME_DOWN = 0xAE,
        VK_VOLUME_UP = 0xAF,
        VK_MEDIA_NEXT_TRACK = 0xB0,
        VK_MEDIA_PREV_TRACK	= 0xB1,
        VK_MEDIA_STOP = 0xB2,
        VK_MEDIA_PLAY_PAUSE = 0xB3
    }
}