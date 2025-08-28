"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface SuccessModalProps {
  isOpen: boolean;
  onClose?: () => void;
  redirectUrl?: string;
  loadingDuration?: number;
  messageDuration?: number;
  selectedTopicsCount?: number; // Add this prop
}

export default function TopicsSuccessModal({ 
  isOpen, 
  onClose, 
  redirectUrl = "/dashboard", 
  loadingDuration = 3000,
  messageDuration = 2000,
  selectedTopicsCount = 0 // Default to 0
}: SuccessModalProps) {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
  
    console.log("Modal opened, selected topics:", selectedTopicsCount);
    
    // Reset states when modal opens
    setProgress(0);
    setShowSuccess(false);
    setHasError(false);

    // Check if no topics selected - show error immediately
    if (selectedTopicsCount === 0) {
      console.log("No topics selected, showing error");
      setHasError(true);
      return;
    }
  
    // Progress bar animation (only for success flow)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + (100 / (loadingDuration / 50));
      });
    }, 50);
  
    // Show success after loading duration
    const loadingTimer = setTimeout(() => {
      console.log("Loading complete, showing success message");
      setShowSuccess(true);
      clearInterval(progressInterval);
    }, loadingDuration);
  
    // Redirect after total delay
    const redirectTimer = setTimeout(() => {
      console.log("Redirecting to:", redirectUrl);
      router.push(redirectUrl);
      onClose?.();
    }, loadingDuration + messageDuration);
  
    // Cleanup
    return () => {
      console.log("Cleaning up timers");
      clearInterval(progressInterval);
      clearTimeout(loadingTimer);
      clearTimeout(redirectTimer);
    };
  }, [isOpen, loadingDuration, messageDuration, redirectUrl, router, onClose, selectedTopicsCount]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-dark-800 rounded-xl p-6 max-w-md w-full mx-4 border border-sapphire/30">
        
        {/* ERROR STATE */}
        {hasError ? (
          <div className="flex flex-col items-center justify-center py-6">
            {/* Error Icon */}
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
              <svg 
                className="w-10 h-10 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            
            {/* Error Message */}
            <h3 className="text-white text-xl font-bold mb-2 text-center">Oops!</h3>
            <p className="text-gray-300 text-center mb-4">
              You haven&apos;t selected any topics yet.
            </p>
            <p className="text-gray-400 text-sm text-center mb-6">
              Please select at least one topic to continue.
            </p>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Go Back & Select Topics
            </button>
          </div>
        ) : !showSuccess ? (
          // LOADING STATE
          <div className="flex flex-col items-center justify-center py-6">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-sapphire/30 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-sapphire border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
            
            <h3 className="text-white text-xl font-bold mb-4 text-center">Saving Your Preferences</h3>
            
            {/* Progress Bar */}
            <div className="w-full bg-dark-700 rounded-full h-3 mb-2">
              <div 
                className="bg-sapphire h-3 rounded-full transition-all duration-50 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            {/* Progress Percentage */}
            <p className="text-gray-300 text-sm">
              {Math.round(progress)}% Complete
            </p>
            
            <p className="text-gray-400 text-sm mt-2 text-center">
              Please wait while we save your topic preferences...
            </p>
          </div>
        ) : (
          // SUCCESS STATE
          <div className="flex flex-col items-center justify-center py-6">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <svg 
                className="w-10 h-10 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            
            {/* Success Message */}
            <h3 className="text-white text-xl font-bold mb-2 text-center">Success!</h3>
            <p className="text-gray-300 text-center mb-6">
              Your {selectedTopicsCount} topic{selectedTopicsCount !== 1 ? 's' : ''} were successfully saved. 
            </p>
            
            {/* Countdown Progress Bar */}
            <div className="w-full bg-dark-700 rounded-full h-2 mb-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-2000 ease-linear"
                style={{ width: '100%' }}
              ></div>
            </div>
            <p className="text-gray-400 text-sm">Redirecting to dashboard...</p>
          </div>
        )}
      </div>
    </div>
  );
}