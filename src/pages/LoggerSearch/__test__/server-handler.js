import { rest } from "msw";

const requestHandlers = [
  rest.get(`https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f`, async (req, res, ctx) => {
    return res(ctx.delay(0), ctx.json({
      elapsed: 70, success: true, result: {
        auditLog: [{ actionType: "DARI_REFRESH_TOKEN", applicationId: null, applicationType: null, companyId: null, creationTimestamp: "2022-01-31 17:29:00", ip: "10.11.0.89", logId: 906468196730134, logInfo: null, ownerId: null, source: null, userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36", userId: 115678 }], number: 0,
        recordsFiltered: 100,
        recordsTotal: 39103,
        totalPages: 392
      }
    }))

  })
]

export { requestHandlers }