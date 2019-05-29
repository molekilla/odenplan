import { KeyHandler, KeyStore } from '@decent-bet/webcrypto-keychain';
export interface VendorWallet {
    getAccountKey(address: string, passphrase?: string): Promise<string>;
    configurePassphrase(passphrase: string): void;
    subscribeToAskPassphrase: () => Promise<any>;
    subscribeToSigning: () => Promise<any>;
}
export declare class ReadOnlyWallet implements VendorWallet {
    getAccountKey(address: string, passphrase?: string): Promise<string>;
    configurePassphrase(passphrase: string): string;
    subscribeToAskPassphrase: () => Promise<string>;
    subscribeToSigning: () => Promise<string>;
    askPassphraseValue: string;
}
export declare class Wallet implements VendorWallet {
    keyStore: KeyStore;
    keyHandler: KeyHandler;
    constructor();
    askPassphraseValue: string;
    subscribeToAskPassphrase: () => Promise<string>;
    subscribeToSigning: () => Promise<string>;
    configurePassphrase(passphrase: string): any;
    validatePassphrase(passphrase: string, promiseFn: Promise<any>): Promise<any>;
    getAccountKey(address: string, passphrase?: string): Promise<string>;
    getAccounts(): Promise<string[]>;
    registerAccount(address: string, privateKey: string, passphrase?: string): Promise<any>;
    private internalCreateAccount;
    createAccount(passphrase?: string, canReturnMnemonicValue?: boolean): Promise<any>;
}
