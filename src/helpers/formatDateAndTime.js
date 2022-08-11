import { formatDistance } from 'date-fns'

export const formatDateAndTime = (date) => {
 return formatDistance(new Date(date), Date.now(), {addSuffix: true});
};
