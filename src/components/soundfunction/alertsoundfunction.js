import Alert from "../../sounds/Alert.wav"


const PlaySoundAlert = () => {
    var audio = new Audio(Alert)
    return(
        audio.play()
    );
  }

export default PlaySoundAlert;