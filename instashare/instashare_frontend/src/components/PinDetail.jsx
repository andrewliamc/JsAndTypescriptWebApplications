import React, { useState, useEffect } from 'react';
import { MdDownloadForOffline, MdSettingsApplications } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { client, urlFor } from '../client';
import { MasonryLayout } from './MasonryLayout';
import { pinDetailMorePinQuery, pinDetailQuery } from '../utils/data';
import Spinner from './Spinner';


const PinDetail = ({ user }) => {
  const { pinId } = useParams();
  const [pin, setPin] = useState();
  const [pinDetail, setPinDetail] = useState(null);
  const [comment, setComment] = useState('');
  const [addingComment, setAddingComment] = useState(false);

  if(!PinDetail) {
    return (
      <Spinner message='Loading pin...' />
    );
  }

  const fetchPinDetails = () => {
    let query = pinDetailQuery(pinId);

    if(query) {
      client.fetch(query)
        .then((data) => {
          setPinDetail(data[0]);

          if(data[0]) {
            query = pinDetailMorePinQuery(data[0]);

            client.fetch(query)
              .then((res) => setPins(res));
              // STOPPED HERE
          }
        })
    }
  }

return (
  <div>PinDetail</div>
)
}

export default PinDetail;