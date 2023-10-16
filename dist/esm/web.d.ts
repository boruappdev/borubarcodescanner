import { WebPlugin } from '@capacitor/core';
import type { BarcodeScannerPlugin, IsSupportedResult, IsTorchAvailableResult, IsTorchEnabledResult, PermissionStatus, ReadBarcodesFromImageOptions, ReadBarcodesFromImageResult, StartScanOptions } from './definitions';
export declare class BarcodeScannerWeb extends WebPlugin implements BarcodeScannerPlugin {
    startScan(_options?: StartScanOptions): Promise<void>;
    stopScan(): Promise<void>;
    readBarcodesFromImage(_options: ReadBarcodesFromImageOptions): Promise<ReadBarcodesFromImageResult>;
    isSupported(): Promise<IsSupportedResult>;
    setZoom(): Promise<void>;
    enableTorch(): Promise<void>;
    disableTorch(): Promise<void>;
    toggleTorch(): Promise<void>;
    isTorchEnabled(): Promise<IsTorchEnabledResult>;
    isTorchAvailable(): Promise<IsTorchAvailableResult>;
    checkPermissions(): Promise<PermissionStatus>;
    requestPermissions(): Promise<PermissionStatus>;
    private createUnavailableException;
}
