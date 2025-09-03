import "./App.css";

function App() {
  const token_key =
    "gxE%2BZrDQCBJLfYqzDD6pa8hX8Zph55B4D0v3SscS7Hq19pgrAs3en697E4XDn8kCims2WGODvHwI2Q5jSSl74JqEuqC%2BG7MsIoU0aQ6YOB5CCpBR5Un5CwGJJ4sdvT3002Na3fKAv9Vmeu2P%2Be82%2FnSvLGBnm97d%2B5HRh3kITbcxXfIwsziJCbDF%2B%2FpQ7QWl0MSbDaS01G6W2IM4%2FQva7g%3D%3D";
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <iframe
          src={`http://103.172.236.197:8100?token=${encodeURI(token_key)}`}
          width="100%"
          height="100%"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>{" "}
    </>
  );
}

export default App;
