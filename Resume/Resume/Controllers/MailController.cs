using Resume.Controllers.RestBase;
using System.Collections.Generic;
using System.Web.Http;

namespace Resume.Controllers
{
    [RoutePrefix("api/Mail")]
    public class MailController //: RestBaseController
    {
        public MailController() : base() { }

        [Route("")]
        // GET: api/Mail
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Mail/5
        public string Get(int id)
        {
            return "value";
        }

        [Route("")]
        // POST: api/Mail
        public void Post([FromBody]string value)
        {

        }

        // PUT: api/Mail/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Mail/5
        public void Delete(int id)
        {
        }
    }
}
