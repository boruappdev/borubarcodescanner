package io.capawesome.capacitorjs.plugins.mlkit.barcodescanning.classes.options;

public class SetScanLimitOptions {

    private int VoteScanSuccessLMT;
    private int VoteScanFailureLMT;

    public SetScanLimitOptions(int VoteScanSuccessLMT, int VoteScanFailureLMT) {
        this.VoteScanSuccessLMT = VoteScanSuccessLMT;
        this.VoteScanFailureLMT = VoteScanFailureLMT;
    }

    public float getVoteScanSuccessLMT() {
        return VoteScanSuccessLMT;
    }
    public float getVoteScanFailureLMT() {
        return VoteScanFailureLMT;
    }
}
