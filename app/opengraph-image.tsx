import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "STEPBACK Store | Hardware gamer en Chile";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            borderRadius: "999px",
            background: "rgba(249, 115, 22, 0.22)",
            filter: "blur(90px)",
            right: "-120px",
            top: "-140px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background: "rgba(249, 115, 22, 0.12)",
            filter: "blur(100px)",
            left: "-120px",
            bottom: "-120px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: "34px",
              fontWeight: 900,
              letterSpacing: "0.18em",
            }}
          >
            STEPBACK
          </div>

          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Store
          </div>
        </div>

        <div
          style={{
            maxWidth: "900px",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "#f97316",
              fontSize: "24px",
              fontWeight: 800,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            Hardware gamer en Chile
          </div>

          <div
            style={{
              fontSize: "82px",
              lineHeight: "0.95",
              fontWeight: 900,
              letterSpacing: "-0.06em",
            }}
          >
            Setups con estética premium.
          </div>

          <div
            style={{
              marginTop: "34px",
              fontSize: "30px",
              lineHeight: "1.35",
              color: "rgba(255,255,255,0.62)",
              maxWidth: "820px",
            }}
          >
            Cases · Monitores · Fuentes · Productos seleccionados
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            color: "rgba(255,255,255,0.55)",
            fontSize: "24px",
            zIndex: 1,
          }}
        >
          <span>Envíos a todo Chile</span>
          <span>·</span>
          <span>Ventas al detalle y al mayor</span>
          <span>·</span>
          <span>Santiago Centro</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}