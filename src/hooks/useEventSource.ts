import { useEffect } from 'react';

import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';

import { useLoginInfoStore } from '@stores/loginInfo.store';

export const useEventSource = ({
  subscribeUrl,
  eventListenerParameters = [],
  onmessage,
  onerror,
}: {
  subscribeUrl: string;
  eventListenerParameters?: Parameters<
    EventSourcePolyfill['addEventListener']
  >[];
  onmessage?: EventSourcePolyfill['onmessage'];
  onerror?: EventSourcePolyfill['onerror'];
}) => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  useEffect(() => {
    if (!loginInfo?.id) {
      return;
    }

    const EventSource = EventSourcePolyfill || NativeEventSource;
    const eventSource = new EventSource(subscribeUrl, {
      headers: {
        Authorization: `Bearer ${loginInfo.accessToken}`,
        'Content-type': 'text/event-stream',
      },
      heartbeatTimeout: 1000 * 60 * 60 * 6,
    });

    eventListenerParameters.map((eventListenerParameter) => {
      eventSource.addEventListener(...eventListenerParameter);
    });

    onmessage && (eventSource.onmessage = onmessage);
    onerror && (eventSource.onerror = onerror);

    return () => {
      eventSource.close();
    };
  }, [loginInfo, onmessage, onerror, subscribeUrl, eventListenerParameters]);
};
