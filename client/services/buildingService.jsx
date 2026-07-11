import api from "../utils/axios";

export const getBuildings = async () => {
    const res = await api.get("/buildings");
    return res.data.buildings;
};

export const createBuilding = async (data) => {
    const res = await api.post("/buildings", data);
    return res.data;
};

export const updateBuilding = async (id, data) => {
    const res = await api.put(`/buildings/${id}`, data);
    return res.data;
};

export const deleteBuilding = async (id) => {
    const res = await api.delete(`/buildings/${id}`);
    return res.data;
};