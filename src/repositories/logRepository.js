class LogRepository {
  constructor(LogRoboModel) {
    this.LogRoboModel = LogRoboModel
  }

  async getLogsByObs(obs) {
    return await this.LogRoboModel.findAll({
      where: { obs },
      order: [['date_time_end', 'DESC']],
    })
  }
}

module.exports = LogRepository
