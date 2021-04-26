export const fbGlobal = {
  getFormValues() {
    const values = {};
    Object.entries(this.fields)?.forEach(([key, config]) => {
      if (config.service === true) return;
      if (config.type === "multiple") {
        values[config.key] = {};
        config.fields.length &&
          config.fields.forEach((row, multiIndex) => {
            // Check if it is in the values
            if (!config.value[multiIndex]) return;
            Object.entries(row).forEach(([fieldKey, fieldConfig]) => {
              if (fieldConfig.service === true) return;
              if (!values[config.key][multiIndex])
                values[config.key][multiIndex] = {};

              values[config.key][multiIndex][fieldKey] = fieldConfig.value;
            });
          });
        return true;
      }
      key = String(key).replace("_", "");
      values[key] = config.value;
    });
    return values
  }
}
export const initConfig = {
}

export const stepperStore = new Proxy({ watcher: 1, step: 0, tabLength: 1, validated: [] }, {
  set: function (field, prop, value) {
    field.watcher += 1
    field[prop] = value;
    return true;
  },
})