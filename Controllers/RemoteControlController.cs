using Microsoft.AspNetCore.Mvc;
using MyRemoteControl.Services;

namespace MyRemoteControl.Controllers
{
    [ApiController]
    [Route("/api/remotecontrol")]
    public class RemoteControlController : ControllerBase
    {
        private KeyboardService keyboardService;

        public RemoteControlController(KeyboardService keyboardService)
        {
            this.keyboardService = keyboardService;
        }

        [HttpPost("play")]
        public IActionResult Play()
        {
            // envia um comando para play ou pause
            this.keyboardService.SendKey(VirtualKey.VK_MEDIA_PLAY_PAUSE);
            return Ok();
        }

        [HttpPost("stop")]
        public IActionResult Stop()
        {
            // envia um comando para parar
            this.keyboardService.SendKey(VirtualKey.VK_MEDIA_STOP);
            return Ok();
        }

        [HttpPost("prev")]
        public IActionResult PreviousTrack()
        {
            // envia um comando para faixa anterior
            this.keyboardService.SendKey(VirtualKey.VK_MEDIA_PREV_TRACK);
            return Ok();
        }

        [HttpPost("next")]
        public IActionResult NextTrack()
        {
            // envia um comando para próxima faixa
            this.keyboardService.SendKey(VirtualKey.VK_MEDIA_NEXT_TRACK);
            return Ok();
        }

        [HttpPost("volumeUp")]
        public IActionResult VolumeUp()
        {
            // envia um comando para aumentar volume
            this.keyboardService.SendKey(VirtualKey.VK_VOLUME_UP);
            return Ok();
        }

        [HttpPost("volumeDown")]
        public IActionResult VolumeDown()
        {
            // envia um comando para abaixar volume
            this.keyboardService.SendKey(VirtualKey.VK_VOLUME_DOWN);
            return Ok();
        }

        [HttpPost("mute")]
        public IActionResult Mute()
        {
            // envia um comando para mutar
            this.keyboardService.SendKey(VirtualKey.VK_VOLUME_MUTE);
            return Ok();
        }

        [HttpPost("fullscreen")]
        public IActionResult Fullscreen()
        {
            // envia um comando para apertar a tecla F, o que faz com que os players de video
            // ativem a tela cheia
            this.keyboardService.SendKey(VirtualKey.VK_F);
            return Ok();
        }
    }
}