import { vprotectApiService } from './vprotect-api-service';
import { ChargebackRequest } from 'model/chargeback/vm-chargeback-request';

class DashboardService {
  getChargebackReport(data: ChargebackRequest) {
    return vprotectApiService.post(
      `/chargeback-reporting/backup-size/vm`,
      data,
    );
  }

  getReport(params = {}) {
    return vprotectApiService.get(`/dashboard/report`, {
      params: {
        ...params,
        protectedEntityType: 'VM',
      },
    });
  }

  getDashboardVmBackupSizeStats() {
    const to = new Date();
    const from = new Date();
    from.setDate(from.getDate() - 14);
    return vprotectApiService.get('/dashboard/vm-backup-size-stats', {
      from: from.getTime(),
      to: to.getTime(),
    });
  }
}

export default new DashboardService();
