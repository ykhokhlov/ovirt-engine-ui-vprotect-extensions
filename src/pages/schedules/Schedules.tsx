import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import SnapshotSchedule from 'pages/schedules/SnapshotSchedule';
import VirtualEnvironmentBackupSchedule from './VirtualEnvironmentBackupSchedule';

const Schedules = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/vm_backup/:guid`}>
        <VirtualEnvironmentBackupSchedule />
      </Route>
      <Route path={`${match.path}/snapshot/:guid`}>
        <SnapshotSchedule />
      </Route>
    </Switch>
  );
};

export default Schedules;
