import { Api } from './api';

describe('API errors', () => {
  const apiKey = 'not_valid';
  let uptimerobot: Api | null = null;

  const errorResponse = {
    stat: 'fail',
    error: {
      parameter_name: 'api_key',
      passed_value: apiKey,
      type: 'invalid_parameter',
    },
  };

  beforeAll(() => {
    uptimerobot = new Api(apiKey, { timeout: 3e3 });
  });

  it('errors should throw in a try/catch', async () => {
    await expect(uptimerobot?.monitor.list()).rejects.toEqual(errorResponse);
  });

  it('should catch in promise', () =>
    uptimerobot?.monitor.list().catch(e => {
      expect(e).toEqual(errorResponse);
    }));
});
