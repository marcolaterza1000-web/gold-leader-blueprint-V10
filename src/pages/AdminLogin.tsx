import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast({ title: "Login fehlgeschlagen", description: error.message, variant: "destructive" });
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="font-inter font-black text-2xl text-white">
            ML <span className="text-[#f59e0b]">COACHING</span>
          </h1>
          <p className="text-white/50 text-sm mt-2 font-inter">Admin Login</p>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-inter text-sm placeholder:text-white/30 focus:outline-none focus:border-[#f59e0b]/50"
          />
          <input
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-inter text-sm placeholder:text-white/30 focus:outline-none focus:border-[#f59e0b]/50"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-full bg-[#f59e0b] text-[#0a0a0a] font-inter font-black text-sm hover:brightness-110 transition disabled:opacity-50"
        >
          {loading ? "Wird geladen..." : "Anmelden"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
