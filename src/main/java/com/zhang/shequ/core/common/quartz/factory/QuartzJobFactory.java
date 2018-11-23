package com.zhang.shequ.core.common.quartz.factory;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

import com.zhang.shequ.core.common.quartz.util.TaskUtils;
import com.zhang.shequ.core.entity.ScheduleJob;

public class QuartzJobFactory implements Job {

    @Override
    public void execute(JobExecutionContext context) throws JobExecutionException {
        ScheduleJob scheduleJob = (ScheduleJob) context.getMergedJobDataMap().get("scheduleJob");
        TaskUtils.invokMethod(scheduleJob);
    }

}
