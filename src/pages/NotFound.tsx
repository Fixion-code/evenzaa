import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <main className="min-h-screen-dvh flex items-center justify-center bg-background px-6">
      <Helmet>
        <title>Page Not Found | Evenza Hospitality Services</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="text-center max-w-lg">
        <div className="font-display text-[10rem] leading-none text-gold/10 select-none font-bold">
          404
        </div>
        <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4 -mt-8">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          The page{" "}
          <code className="text-xs bg-card px-2 py-0.5 rounded border border-border">
            {pathname}
          </code>{" "}
          doesn't exist or may have been moved.
        </p>
        <p className="text-muted-foreground/60 text-sm mb-10">
          Looking for event manpower or hospitality staff? Head back to the homepage. +91 91617 10849
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary justify-center">
            <Home className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <Link to="/event-manpower-jaipur" className="btn-secondary justify-center">
            Event Manpower Jaipur <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
}
