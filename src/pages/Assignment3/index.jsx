import assignment3Example from "../../assets/imgs/assignment3-example.png";
import "./index.scss";

function Assignment3() {
  const getOptimize = () => {
    return `
        import { call, put } from "redux-saga/effects";
        
        let ctrl;
        async function function1(action) {
            ctrl = new AbortController();
            const config = {
                method: "POST",
                url: "https://some-endpoint-url.com",
                data: action.payload,
                signal: ctrl.signal,
            };

            try {
                const { data } = await call(/** a axios request with config */);

                put(/** reducer 1 */);
            } catch (e) {
                if (e.response) {
                    const er = e.response;
                    put(/** reducer 2 */);
                }
            } finally {
                    if (ctrl.signal.aborted) {
                    put(/** reducer 3 */);
                }
            }
        }

        function function2() {
            ctrl.abort();
        }    
    `;
  };
  return (
    <div className="page-container">
      <div className="page-content">
        <div>
          <p>
            Please answer the following three questions in .txt file based on
            the javascript code below.
          </p>
          <img src={assignment3Example} alt="assignment3-example" />
          <ul className="assignment3-list">
            <li>
              Simply describe what {`"function1"`} will do.
              <p>
                Answer : {`"function1"`}
                在做API串接的post行為，當response為success，則會執行reducer1的action，若response不為success，則會執行reducer2的action,
                而無論response回傳成功或失敗的狀態，若是api在request的過程中有觸發signal.aborted來中斷連線的話，則會執行reducer3的action
              </p>
            </li>
            <li>
              Can we stop what {`"function1"`} is doing? How?
              <p>
                Answer : 可以的，只要我們執行了 {`"function1"`} 去做 abort
                的動作，即可中斷API的連線
              </p>
            </li>
            <li>
              How to optimize this snippet?
              <p>Answer : 將generator 改為使用 async / await的方式</p>
              <pre>{getOptimize()}</pre>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Assignment3;
