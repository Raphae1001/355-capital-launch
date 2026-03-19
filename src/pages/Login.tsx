import { Link } from "react-router-dom";
import { Lock } from "lucide-react";

const Login = () => (
  <div className="min-h-screen bg-background flex items-center justify-center px-6">
    <div className="glass rounded-2xl p-10 max-w-md w-full text-center">
      <Lock className="w-10 h-10 text-primary mx-auto mb-6" />
      <h1 className="text-2xl font-bold mb-2">Investor Portal</h1>
      <p className="text-muted-foreground text-sm mb-8">
        Access is restricted to current limited partners.
      </p>
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <button className="w-full py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all">
          Sign In
        </button>
      </div>
      <Link to="/" className="text-xs text-muted-foreground mt-6 inline-block hover:text-foreground transition-colors">
        ← Back to 355 Capital
      </Link>
    </div>
  </div>
);

export default Login;
