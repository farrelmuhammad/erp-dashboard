import React from 'react'

export const detailTipeProduk = () => {
  return (
    <>
    <form className="form-input shadow-lg p-3 mb-5 bg-body rounded">
    <div className="text-title text-start mb-4">
        <h3 className="title fw-bold">Tipe Produk</h3>
    </div>
        <div className="row mb-3">
            <label htmlFor="inputKode3" className="col-sm-2 col-form-label">Kode</label>
            <div className="col-sm-10">
            <input disabled="true" type="kode" className="form-control" id="inputKode3"/>
            </div>
        </div>
        <div className="row mb-3">
            <label htmlFor="inputNama3" className="col-sm-2 col-form-label">Nama Tipe Produk</label>
            <div className="col-sm-10">
            <input disabled="true" type="Nama" className="form-control" id="inputNama3"/>
            </div>
        </div>
        <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Keterangan</label>
            <div className="col-sm-10">
            <textarea disabled="true" class="form-control" id="form4Example3" rows="4"/>
            </div>
        </div>
    </form>
</>
  )
}

export default detailTipeProduk