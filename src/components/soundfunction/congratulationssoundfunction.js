import Congratulations from "../../sounds/Congratulations.wav"

const PlaySoundCongratulations = () => {
    var audio = new Audio(Congratulations)
    return(
        audio.play()
    );
  }

  export default PlaySoundCongratulations