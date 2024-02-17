<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'address' => 'required|string',
            'note' => 'nullable|string',
            'amount' => 'required|numeric|regex:/^\d+(\.\d{1,2})?$/',
        ];
    }
    public function messages()
    {
        return [
            'address.required' => 'Mohon mengisi alamat terlebih dahulu',
            'address.string' => 'Isi alamat menggunakan string',
        ];
    }
}
