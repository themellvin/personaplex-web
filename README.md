# PersonaPlex Web

Web client for **PersonaPlex** — a real-time, full-duplex speech-to-speech conversational model with persona control through text-based role prompts and audio-based voice conditioning.

Built with **React 18 + Vite 5 + TypeScript + Tailwind CSS**.

---

## 🎯 What Is PersonaPlex?

PersonaPlex is a real-time, full-duplex speech-to-speech conversational model that enables persona control through text-based role prompts and audio-based voice conditioning. It is based on the [Moshi](https://arxiv.org/abs/2410.00037) architecture and weights.

### Key Features
- **Full-duplex conversation** — the model listens and speaks simultaneously, with natural turn-taking and backchanneling
- **Text prompt persona control** — define the model's role, knowledge, and behavior with a text prompt
- **Voice prompt conditioning** — pick from 16 pre-trained voices (NATF0–VARF4) to condition the audio output
- **Low-latency audio** — Opus codec + Web Audio API + custom WASM decoder for streaming playback

---

## 🏗 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 + daisyUI 4 |
| Audio | Opus codec (`opus-recorder`), Web Audio API, custom WASM decoder |
| Routing | React Router 6 |
| Transport | WebSocket (real-time audio streaming) |

---

## 🚀 Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deployment

This repo is deployed to **GitHub Pages** at:

**https://themellvin.github.io/personaplex-web/**

The GitHub Actions workflow in `.github/workflows/deploy.yml` automatically builds and deploys the site on every push to `main`.

---

## 📋 Pages

| Route | Description |
|---|---|
| `/` | Homepage — enter a text prompt, pick a voice, connect |
| `/conversation` | Live full-duplex conversation view |

---

## 🎤 How It Works

1. **Homepage (`/`)** — User enters a persona prompt and selects a voice
2. **Connection** — WebSocket connects to the PersonaPlex backend with prompt/voice parameters
3. **Audio Pipeline** — Microphone → Opus encoder → WebSocket → model → Opus decoder → speaker
4. **Conversation** — Full-duplex audio streaming with live text transcript

---

## 🔗 Links

- **Model weights:** https://huggingface.co/nvidia/personaplex-7b-v1
- **Paper:** https://arxiv.org/abs/2602.06053
- **Demo:** https://research.nvidia.com/labs/adlr/personaplex/
- **Source repo:** https://github.com/themellvin/personaplex

---

## 📄 License

MIT — see [LICENSE](LICENSE).
