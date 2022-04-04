namespace MyRemoteControl.Services
{
    public class PlayerService
    {
        private KeyboardService keyboardService;

        public PlayerService(KeyboardService keyboardService)
        {
            this.keyboardService = keyboardService;
        }

        public void Play()
        {
            // envia um comando para play ou pause
            this.keyboardService.SendKey(VirtualKey.VK_MEDIA_PLAY_PAUSE);
        }

        public void Stop()
        {
            // envia um comando para parar
            this.keyboardService.SendKey(VirtualKey.VK_MEDIA_STOP);
        }

        public void PreviousTrack()
        {
            // envia um comando para faixa anterior
            this.keyboardService.SendKey(VirtualKey.VK_MEDIA_PREV_TRACK);
        }

        public void NextTrack()
        {
            // envia um comando para próxima faixa
            this.keyboardService.SendKey(VirtualKey.VK_MEDIA_NEXT_TRACK);
        }

        public void Forward()
        {
            // envia um comando para apertar seta para direita, que faz com que o vídeo
            // avance 5 segundos
            this.keyboardService.SendKey(VirtualKey.VK_RIGHT);
        }

        public void Backward()
        {
            // envia um comando para apertar seta para esquerda, que faz com que o vídeo
            // volte 5 segundos
            this.keyboardService.SendKey(VirtualKey.VK_LEFT);
        }

        public void VolumeUp()
        {
            // envia um comando para aumentar volume
            this.keyboardService.SendKey(VirtualKey.VK_VOLUME_UP);
        }

        public void VolumeDown()
        {
            // envia um comando para abaixar volume
            this.keyboardService.SendKey(VirtualKey.VK_VOLUME_DOWN);
        }

        public void Mute()
        {
            // envia um comando para mutar
            this.keyboardService.SendKey(VirtualKey.VK_VOLUME_MUTE);
        }

        public void Fullscreen()
        {
            // envia um comando para apertar a tecla F, o que faz com que os players de video
            // ativem a tela cheia
            this.keyboardService.SendKey(VirtualKey.VK_F);
        }
    }
}