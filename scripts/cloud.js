function Cloud() {
    this.server = "https://api.connector.mbed.com";
    this.key = "KGC48Y04jRsJgYG4Uwnx1dmMfhVImYwy49sc87PafmJDJLdmvexESLhy4J0AeLmbwvbE5kMfIoy9PDSYVoTSvl55Kue3InElCB7N";
    this.authorization = "Bearer " + this.key;
}

Cloud.prototype.getDevices = function (packet) {
    var self = this;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: self.server + "/endpoints",
        type: "get",
        contentType: "application/json",
        dataType:"json",
          headers: {
        "Authorization": self.authorization
        },
        data:JSON.stringify(packet),
      }).done(function (result) {
        resolve(result);
      });
    });
  };

Cloud.prototype.getEndpointInfo = function (packet) {
    var self = this;
    console.log("packet: " + JSON.stringify(packet));
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: self.server + "/endpoints/" + packet.endpoint,
        type: "get",
        contentType: "application/octet-stream",
        dataType:"json",
          headers: {
        "Authorization": self.authorization,
        data: ""
        },
      }).done(function (result) {
        console.log(result);
        resolve(result);
      });
    });
  };



var cloud = new Cloud(); 