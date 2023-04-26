import Typewriter from "typewriter-effect";

const Text = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Anubhav Singla",
          // "Front End Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Text