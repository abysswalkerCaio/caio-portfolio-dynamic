<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\ContactModel;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $model = ContactModel::paginate(10);
        
        return response()->json($model);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $data = $request->validate([
                'name' => 'required|string',
                'email' => 'required|string',
                'description' => 'required|string'
            ]);

            $model = ContactModel::create($data);

            return response()->json($model, Response::HTTP_CREATED);
        } catch(\Throwable $th) {
            switch($th->getCode()) {
                case 23000:
                    return response()->json('This email has already attempted to contact. Please try again later.', Response::HTTP_INTERNAL_SERVER_ERROR);
                    break;
                default:
                    return response()->json($th->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
                    break;
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $model = ContactModel::find($id);

            return response()->json($model);
        } catch(\Throwable $th) {
            return response()->json($th->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $model = ContactModel::find($request->all());

            return response()->noContent();
        } catch(\Throwable $th) {
            return response()->json($th->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $model = ContactModel::find($id);
            $model->delete();

            return response()->noContent();
        } catch(\Throwable $th) {
            return response()->json($th->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
