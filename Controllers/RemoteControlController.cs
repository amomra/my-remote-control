using Microsoft.AspNetCore.Mvc;
using MyRemoteControl.Services;

namespace MyRemoteControl.Controllers
{
    [ApiController]
    [Route("/api/remotecontrol")]
    public class RemoteControlController : ControllerBase
    {
        private PlayerService playerService;

        public RemoteControlController(PlayerService playerService)
        {
            this.playerService = playerService;
        }

        [HttpPost("play")]
        public IActionResult Play()
        {
            this.playerService.Play();
            return Ok();
        }

        [HttpPost("stop")]
        public IActionResult Stop()
        {
            this.playerService.Stop();
            return Ok();
        }

        [HttpPost("prev")]
        public IActionResult PreviousTrack()
        {
            this.playerService.PreviousTrack();
            return Ok();
        }

        [HttpPost("next")]
        public IActionResult NextTrack()
        {
            this.playerService.NextTrack();
            return Ok();
        }

        [HttpPost("forward")]
        public IActionResult Forward()
        {
            this.playerService.Forward();
            return Ok();
        }

        [HttpPost("backward")]
        public IActionResult Backward()
        {
            this.playerService.Backward();
            return Ok();
        }

        [HttpPost("volumeUp")]
        public IActionResult VolumeUp()
        {
            this.playerService.VolumeUp();
            return Ok();
        }

        [HttpPost("volumeDown")]
        public IActionResult VolumeDown()
        {
            this.playerService.VolumeDown();
            return Ok();
        }

        [HttpPost("mute")]
        public IActionResult Mute()
        {
            this.playerService.Mute();
            return Ok();
        }

        [HttpPost("fullscreen")]
        public IActionResult Fullscreen()
        {
            this.playerService.Fullscreen();
            return Ok();
        }
    }
}