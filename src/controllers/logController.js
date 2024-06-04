class LogController {
  constructor(logService) {
    this.logService = logService
  }

  async getLogs(req, res) {
    const { obs } = req.query
    if (!obs) {
      return res
        .status(400)
        .send({ error: 'Query parameter "obs" is required' })
    }

    try {
      const logs = await this.logService.getLogs(obs)
      res.json(logs)
    } catch (error) {
      res.status(500).send({ error: 'Error fetching logs' })
    }
  }
}

module.exports = LogController
