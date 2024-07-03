const dateFormatter=(dateString: string): string=> {
        const date = new Date(dateString);
        const day = date.getUTCDate();
        const monthNames: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[date.getUTCMonth()];
        const year = date.getUTCFullYear();
      
        return `${day}/${month}/${year}`;
      }
      export default dateFormatter;