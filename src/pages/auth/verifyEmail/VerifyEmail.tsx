import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VerifyEmail.module.css";

const VerifyEmail: React.FC = () => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const API_BASE_URL = 'http://localhost:3000/api';

  useEffect(() => {
    // Get email from localStorage (set during signup)
    const verificationEmail = localStorage.getItem('verificationEmail');
    if (verificationEmail) {
      setEmail(verificationEmail);
    } else {
      // If no email found, redirect to signup
      navigate('/signup');
    }

    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [navigate]);

  const handleInputChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) return;
    
    // Only allow numbers
    if (value && !/^[0-9]$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Clear error when user starts typing
    if (error) {
      setError("");
    }

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace') {
      if (!code[index] && index > 0) {
        // If current input is empty, focus previous input
        inputRefs.current[index - 1]?.focus();
      }
    }
    // Handle paste
    else if (e.key === 'Enter') {
      handleSubmit(e as any);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    
    // Check if pasted data is 6 digits
    if (/^[0-9]{6}$/.test(pastedData)) {
      const newCode = pastedData.split('');
      setCode(newCode);
      
      // Focus last input
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const verificationCode = code.join('');
    
    if (verificationCode.length !== 6) {
      setError("Please enter all 6 digits");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: verificationCode
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Clear stored email
        localStorage.removeItem('verificationEmail');
        // Redirect to login page
        navigate('/login', { 
          state: { message: 'Email verified successfully! Please log in.' }
        });
      } else {
        setError(data.message || 'Wrong code. Please try again.');
        // Clear the code inputs
        setCode(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
    } catch (error: any) {
      setError('Network error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/auth/resend-verification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Show success message (you might want to use a toast notification)
        setError("");
        // Clear current code
        setCode(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      } else {
        setError(data.message || 'Failed to resend code');
      }
    } catch (error: any) {
      setError('Network error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.verifyContainer}>
      <div className={styles.verifyCard}>
        <div className={styles.verifyHeader}>
          <h1 className={styles.title}>Verify Your Email</h1>
          <p className={styles.subtitle}>
            We've sent a 6-digit verification code to
          </p>
          <p className={styles.email}>{email}</p>
        </div>

        {error && (
          <div className={styles.errorMessage}>{error}</div>
        )}

        <form onSubmit={handleSubmit} className={styles.verifyForm}>
          <div className={styles.codeInputContainer}>
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => { inputRefs.current[index] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                className={styles.codeInput}
                disabled={isLoading}
              />
            ))}
          </div>

          <button
            type="submit"
            className={styles.verifyButton}
            disabled={isLoading || code.join('').length !== 6}
          >
            {isLoading ? "Verifying..." : "Verify Email"}
          </button>
        </form>

        <div className={styles.verifyFooter}>
          <p className={styles.footerText}>
            Didn't receive the code?{" "}
            <button
              type="button"
              onClick={handleResendCode}
              className={styles.resendButton}
              disabled={isLoading}
            >
              Resend Code
            </button>
          </p>
          <p className={styles.footerText}>
            <a href="/signup" className={styles.backLink}>
              ← Back to Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;