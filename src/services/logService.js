class LogService {
  constructor(logRepository) {
    this.logRepository = logRepository
  }

  async getLogs(obs) {
    return await this.logRepository.getLogsByObs(obs)
  }
}

module.exports = LogService
