/**
 * PsiturkEventLogger class
 */
class PsiturkEventLogger {
  // PUBLIC methods.

  /**
   * Create navigate task.
   * @param {SimEnv} sim - simulator
   */
  constructor(psiturk) {
    this.psiturk = psiturk;
  }

  handleRecordTrialData(phase, event, data) {
    if (this.psiturk) {
      this.psiturk.recordTrialData({
        phase: phase,
        event: event,
        data: data
      });
    }
  }

  handleRecordUnstructuredData(key, value) {
    if (this.psiturk) {
      this.psiturk.recordUnstructuredData(key, value);
    }
  }
}

export default PsiturkEventLogger;
