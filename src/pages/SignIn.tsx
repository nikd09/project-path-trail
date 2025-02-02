import { useNavigate } from 'react-router-dom';

export function SignIn() {
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    // ... your sign in logic ...

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (!error) {
      navigate('/'); // Redirect to home page after successful sign in
    }
  };

  // ... rest of your component
} 