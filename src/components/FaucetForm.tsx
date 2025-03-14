import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import NetworkSelect from './NetworkSelect';
import TokenSelect from './TokenSelect';
import Image from 'next/image';
import { toast } from 'sonner';

const FaucetForm = () => {
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const [showRequestForm, setShowRequestForm] = useState(true);

  const handleConnect = () => {
    // Simulate connecting to MetaMask
    toast.info("Connecting to wallet...");
    setTimeout(() => {
      const randomAddress = '0x' + Math.random().toString(16).substring(2, 42);
      setAddress(randomAddress);
      toast.success("Wallet connected successfully");
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!address || !address.startsWith('0x')) {
      toast.error("Please enter a valid hexadecimal address");
      return;
    }

    setIsSubmitting(true);

    // Simulate a network request
    toast.info("Processing request...");
    setTimeout(() => {
      setTransactionId('0x' + Math.random().toString(16).substring(2, 30));
      setShowRequestForm(false);
      setIsSubmitting(false);
      toast.success("Transaction submitted successfully");
    }, 1500);
  };

  const handleBack = () => {
    setAddress('');
    setTransactionId(null);
    setShowRequestForm(true);
  };

  const copyAddress = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Address copied to clipboard!");
  };

  if (!showRequestForm && transactionId) {
    return (
      <div>
        <p className="rate-limit-text">Transaction successfully submitted!</p>
        <div>
          <span className="bold-text">Transaction ID</span>
          <p className="rate-limit-text">
            <a
              target="_blank"
              href={`https://testnet.kitescan.ai/tx/${transactionId}`}
              rel="noreferrer"
            >
              {transactionId}
            </a>
          </p>
        </div>
        <Button className="w-full mt-4" onClick={handleBack}>Back</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="box-header">
        <span style={{ color: 'grey' }}>Select Network</span>
      </div>
      <NetworkSelect />

      <br />

      <div>
        <div style={{ width: '100%' }}>
          <span
            style={{
              color: 'grey',
              fontSize: '12px',
              float: 'right'
            }}
          >
            Faucet balance: 0 KITE
          </span>
          <span style={{ color: 'grey', fontSize: '12px' }}>Select Token</span>
          <div style={{ width: '100%' }}>
            <TokenSelect />
          </div>
        </div>
      </div>

      <br />

      <p className="rate-limit-text">
        Drops are limited to <span>1 request in 24 hours.</span>
      </p>

      <div className="address-input">
        <Input
          placeholder="Hexadecimal Address (0x...)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="bg-[#1e1e1e] border-0"
        />
        <span className="connect-metamask" onClick={handleConnect}>
          <Image
            src="https://web-assets.same.dev/4090015207/754459375.webp"
            alt="metamask"
            width={18}
            height={18}
          />
          Connect
        </span>
      </div>

      <br />

      <Button
        className={address && address.startsWith('0x') ? 'send-button' : 'send-button-disabled'}
        disabled={!address || !address.startsWith('0x') || isSubmitting}
        type="submit"
      >
        {isSubmitting ? 'Processing...' : 'Request 0.5 KITE'}
      </Button>
    </form>
  );
};

export default FaucetForm;
