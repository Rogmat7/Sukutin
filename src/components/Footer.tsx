import React from 'react';
import { toast } from 'sonner';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Footer = () => {
  const faucetAddress = '0xAf435F77d718879946Ce001B222a26B5711d76';

  const handleAddNetwork = () => {
    toast("This is a demo. Add to Metamask functionality is not implemented.");
  };

  const handleViewExplorer = () => {
    window.open('https://testnet.kitescan.ai', '_blank');
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(faucetAddress);
    toast.success("Address copied to clipboard!");
  };

  return (
    <>
      <div className="footer-box">
        <div style={{ fontSize: '13px', padding: '20px' }}>
          Use the buttons below to add <b>KiteAI Testnet</b> to your browser wallet extension or visit the block explorer.
          <div className="footer-buttons">
            <Button
              className="add-network"
              onClick={handleAddNetwork}
            >
              <Image
                src="https://web-assets.same.dev/4090015207/754459375.webp"
                alt="metamask"
                width={16}
                height={16}
              />
              Add to Metamask
            </Button>
            <Button
              className="add-network"
              onClick={handleViewExplorer}
            >
              <Image
                src="https://web-assets.same.dev/587219959/211379611.png"
                alt="explorer"
                width={16}
                height={16}
              />
              View Block Explorer
            </Button>
          </div>
        </div>
      </div>

      <div className="footer-box">
        <div style={{ fontSize: '13px', padding: '20px' }}>
          Once you are done with the testing, feel free to send the remaining coins to the following faucet address.
          <div className="return-address">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-between w-full">
                    <span className="truncate">{faucetAddress}</span>
                    <Image
                      src="https://web-assets.same.dev/2447205690/840091806.png"
                      alt="copy"
                      width={20}
                      height={20}
                      className="ml-2 cursor-pointer"
                      onClick={copyAddress}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy to clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
