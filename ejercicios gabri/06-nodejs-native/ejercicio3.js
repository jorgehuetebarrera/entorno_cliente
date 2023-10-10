function decomposeUrl(url) {
    function isValidIP(ip) {
        const octets = ip.split('.');
        if (octets.length !== 4) return false;
        return octets.every(octet => {
            const num = parseInt(octet, 10);
            return !isNaN(num) && num >= 0 && num <= 255;
        });
    }

    const result = {
        protocol: null,
        ipAdress: null,
        subDomain: null,
        domainName: null,
        folderTree: null,
        targetFile: null,
        argumentsFile: null
    };

    // Handle non-standard protocol
    const protocolMatch = url.match(/^([a-zA-Z]+):\/\//i);
    if (protocolMatch) {
        result.protocol = protocolMatch[1];
        url = url.slice(protocolMatch[0].length);  // Remove protocol from url
    } else if (url.startsWith('file://')) {
        result.protocol = 'file';
        url = url.slice(7);
    }

    // Split url into parts
    const [hostnamePath, search] = url.split('?');
    const [hostname, ...pathParts] = hostnamePath.split('/');

    // Here, we'll use a regex to check if the hostname looks like an IP address
    const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    if (ipRegex.test(hostname)) {
        // If it looks like an IP address, we'll further validate it
        if (isValidIP(hostname)) {
            result.ipAdress = hostname;
        } else {
            // If it's not a valid IP, we'll consider it as a domain name
            result.domainName = hostname;
        }
    } else {
        // If not an IP, process domain and subdomain
        const hostnameParts = hostname.split('.');
        if (hostnameParts.length > 2) {
            result.subDomain = hostnameParts[0];
            hostnameParts.shift();  // Remove subdomain from array
        }
        result.domainName = hostnameParts.join('.');
    }

    // Process path
    if (pathParts.length > 1) {
        result.targetFile = pathParts.pop();
        result.folderTree = pathParts;
    } else if (pathParts.length === 1 && pathParts[0]) {
        result.targetFile = pathParts[0];
    }

    // Set targetFile to null if it's an empty string
    if (result.targetFile === '') {
        result.targetFile = null;
    }

    // Process search
    if (search) {
        result.argumentsFile = `?${search}`;
    }

    return result;
}