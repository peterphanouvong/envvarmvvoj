import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="card hero">
        <p className="text-display-1 hero-title">
          Good morning Peteswah
        </p>
        <p className="text-body-1 hero-tagline">Configure your app</p>

        <Link
          href="https://kinde.com/docs/sdks/nextjs-sdk"
          target="_blank"
          rel="noreferrer"
          className="btn btn-light btn-big"
        >
          Go to docs
        </Link>
      </div>
    </div>
  );
}
