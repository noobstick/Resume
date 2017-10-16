using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace Resume.Controllers.RestBase
{
    public class RestBaseController<T> : ApiController
    {
        private HttpClient _httpClient;
        public RestBaseController() {
            _httpClient = new HttpClient();
        }

        //public Task<T> PostToApi() {
        //    var response = await _httpClient.PostAsync<Task<T>>('sdfsfsdf').Result.Content.ReadAsStringAsync();
        //    return response;
        //}
    }
}