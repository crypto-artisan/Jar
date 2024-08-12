export const formatAddress = (addr: any) => {
    if (addr.length <= 10) return addr;
    return `${addr.slice(0, 6)}...${addr.slice(-3)}`;
};