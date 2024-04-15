import { InstrumentationProvider } from './monitoring-providers.enum';

/**
 * @name registerMonitoringInstrumentation
 * @description Register monitoring instrumentation based on the MONITORING_PROVIDER environment variable.
 *
 * Please set the MONITORING_PROVIDER environment variable to register the monitoring instrumentation provider.
 */
export async function registerMonitoringInstrumentation() {
  if (!process.env.MONITORING_PROVIDER) {
    console.info(`No instrumentation provider specified. Skipping...`);

    return;
  }

  switch (process.env.MONITORING_PROVIDER as InstrumentationProvider) {
    case InstrumentationProvider.Baselime: {
      const { registerInstrumentation } = await import(
        '@kit/baselime/instrumentation'
      );

      return registerInstrumentation();
    }

    case InstrumentationProvider.Sentry: {
      const { registerInstrumentation } = await import(
        '@kit/sentry/instrumentation'
      );

      return registerInstrumentation();
    }

    default:
      throw new Error(
        `Unknown instrumentation provider: ${process.env.MONITORING_PROVIDER}`,
      );
  }
}
